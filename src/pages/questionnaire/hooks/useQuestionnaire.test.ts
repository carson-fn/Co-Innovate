import { act, renderHook, waitFor } from '@testing-library/react';
import { useQuestionnaire } from './useQuestionnaire';

const setup = async () => {
  const { result } = renderHook(() => useQuestionnaire('intake'));
  await waitFor(() => {
    expect(result.current.currentQuestion?.id).toBe('intake_1');
  });
  return result;
};

describe('useQuestionnaire.getAnswersAsFormattedString', () => {
  test('formats multi-select stored keys into option labels', async () => {
    const result = await setup();

    act(() => {
      result.current.answerCurrentQuestion('revenue; culture');
    });

    const formatted = result.current.getAnswersAsFormattedString();
    expect(formatted).toContain('What result(s) do you want to achieve?');
    expect(formatted).toContain('Generate revenue (increase revenue, EBITDA, cash flow, or cost savings)');
    expect(formatted).toContain('Create a more innovative culture');
    expect(formatted).not.toContain('revenue; culture');
  });

  test('preserves free-text Other values while formatting known multi-select values', async () => {
    const result = await setup();

    act(() => {
      result.current.answerCurrentQuestion('strategy; Other: build an AI lab');
    });

    const formatted = result.current.getAnswersAsFormattedString();
    expect(formatted).toContain('Align with corporate strategy, goals, or KPIs');
    expect(formatted).toContain('Other: build an AI lab');
  });

  test('still formats single-value multiple-choice answers into labels', async () => {
    const result = await setup();

    act(() => {
      result.current.answerCurrentQuestion('revenue');
    });

    await waitFor(() => {
      expect(result.current.currentQuestion?.id).toBe('intake_2');
    });

    act(() => {
      result.current.answerCurrentQuestion('ideas');
    });

    const formatted = result.current.getAnswersAsFormattedString();
    expect(formatted).toContain('Generate more innovative ideas');
  });
});
