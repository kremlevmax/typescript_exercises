"use strict";
class Logger {
    prinntDate() {
        this.log(new Date().toString());
    }
}
class DateLogger extends Logger {
    log(message) {
        console.log(message);
    }
    logWithDate(message) {
        this.log(new Date());
        this.log(message);
    }
}
const dateLogger = new DateLogger();
dateLogger.logWithDate("test");
