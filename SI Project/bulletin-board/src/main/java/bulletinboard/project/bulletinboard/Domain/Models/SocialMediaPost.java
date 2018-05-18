package bulletinboard.project.bulletinboard.Domain.Models;

import org.springframework.data.annotation.TypeAlias;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.UUID;

@Document(collection = "posts")
@TypeAlias("socialMediaPost")
public class SocialMediaPost extends BasePost {
    private String provider;
    private String url;

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

}
