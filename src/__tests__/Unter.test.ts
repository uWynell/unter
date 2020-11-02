import { Handler, Unter } from '../Unter';

let unter: Unter;
let mockData: unknown;
beforeEach(() => {
  unter = new Unter();
  mockData = { isMock: true, useful: '0%' };
});

test('callback is called correctly', () => {
  return new Promise((res) => {
    unter.on('/mock', (path, data) => {
      expect(path).toBe('/mock');
      expect(data).toBe(mockData);
      res();
    });
    unter.dispatch('/mock', mockData);
  });
});

test('unable to create non-function handlers', () => {
  expect(() => unter.on('/mock', 'string' as unknown as Handler)).toThrow(TypeError);
});

test('non-function handlers are not called on dispatch', () => {
  unter.handlers.set('/mock', 'MOCK' as unknown as Handler);
  expect(unter.dispatch('/mock', mockData)).toBeUndefined();
});