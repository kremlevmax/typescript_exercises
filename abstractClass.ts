abstract class Logger {
  abstract log(message: string): void;

  prinntDate(): void {
    this.log(new Date().toString());
  }
}

class DateLogger extends Logger {
  log(message: Date | string): void {
    console.log(message);
  }

  logWithDate(message: string) {
    this.log(new Date());
    this.log(message);
  }
}

const dateLogger = new DateLogger();

dateLogger.logWithDate("test");
