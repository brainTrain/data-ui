import getChartDimensions from '../../src/utils/getChartDimensions';

describe('getChartDimensions', () => {
  const result = getChartDimensions({ width: 100, height: 100, margin: {} });

  test('it should be defined', () => {
    expect(getChartDimensions).toBeDefined();
  });

  test('it should return an object with margin, innerHeight, and innerWidth keys', () => {
    expect(result).toEqual(
      expect.objectContaining({
        innerWidth: expect.any(Number),
        innerHeight: expect.any(Number),
        margin: expect.any(Object),
      }),
    );
  });

  test('it should return a complete margin', () => {
    expect(result.margin).toEqual(
      expect.objectContaining({
        top: expect.any(Number),
        right: expect.any(Number),
        bottom: expect.any(Number),
        left: expect.any(Number),
      }),
    );
  });
});
