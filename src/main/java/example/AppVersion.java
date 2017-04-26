package example;

import java.time.Instant;

public class AppVersion {

    private String number;
    private String buildDate;

    public AppVersion() {
        this.buildDate = Instant.now().toString();
    }

    public AppVersion withNumber(String number) {
        this.number = number;
        return this;
    }

    public String getNumber() {
        return this.number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public String getBuildDate() {
        return buildDate;
    }

    public void setBuildDate(String buildDate) {
        this.buildDate = buildDate;
    }

}
