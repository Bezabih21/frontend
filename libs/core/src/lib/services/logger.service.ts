export class LoggerService {
  debugMode = true;

  constructor(private readonly environment?) {
    //  debug enable with localstorage
    this.debugMode = localStorage.getItem('DEBUG__enableLogger')
      ? true
      : this.environment?.debug ?? true;
  }

  // tslint:disable-next-line: ban-types
  public get log(): any {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    return this.debugMode ? console.log.bind(window.console) : (): void => {};
  }
  public get debug(): any {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    return this.debugMode ? console.debug.bind(window.console) : (): void => {};
  }
  public get info(): any {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    return this.debugMode ? console.info.bind(window.console) : (): void => {};
  }
  public get warn(): any {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    return this.debugMode ? console.warn.bind(window.console) : (): void => {};
  }

  public get error(): any {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    return this.debugMode ? console.error.bind(window.console) : (): void => {};
  }

  public get table(): any {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    return this.debugMode ? console.table.bind(window.console) : (): void => {};
  }
}

export const logger = new LoggerService();
