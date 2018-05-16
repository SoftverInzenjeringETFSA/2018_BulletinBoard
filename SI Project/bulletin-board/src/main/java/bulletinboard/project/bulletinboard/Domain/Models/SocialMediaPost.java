package bulletinboard.project.bulletinboard.Domain.Models;

import org.springframework.data.mongodb.core.mapping.Document;

@Document()
public class SocialMediaPost extends BaseModel {
    private String provider;
    private String url;
    private String embedHtml;

    public SocialMediaPost(String provider, String url) {
        this.provider = provider;
        this.url = url;
    }

    public String getProvider() {
        return provider;
    }

    public void setProvider(String provider) {
        this.provider = provider;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getEmbedHtml() {
        return embedHtml;
    }

    public void setEmbedHtml(String embedHtml) {
        this.embedHtml = embedHtml;
    }
}
