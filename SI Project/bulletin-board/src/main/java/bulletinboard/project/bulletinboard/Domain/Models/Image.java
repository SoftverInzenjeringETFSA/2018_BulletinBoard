package bulletinboard.project.bulletinboard.Domain.Models;

public class Image extends BaseModel {
    private String imageUrl;
    private int rotation;


    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public int getRotation()
    {
        return this.rotation;
    }

    public void setRotation(int rotation)
    {
        this.rotation = rotation;
    }
}
