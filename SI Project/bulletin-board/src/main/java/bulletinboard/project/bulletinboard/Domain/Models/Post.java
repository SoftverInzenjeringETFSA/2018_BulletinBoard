package bulletinboard.project.bulletinboard.Domain.Models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.annotation.Generated;
import javax.persistence.GeneratedValue;
import java.util.Date;

@Document
public class Post extends BaseModel {


    private int UserId;
    private String Title;
    private String Description;
    private String Color;
    private Date DateCreated;
    private boolean IsHidden;
    private Date Date;

    /*
    public Post(){}

    public Post(int userID, String title, String desc, String color, Date dateCreated, boolean isHidden) {
        this.UserId=userID;
        this.Title=title;
        this.Description=desc;
        this.Color=color;
        this.DateCreated=dateCreated;
        this.IsHidden=isHidden;
    }

    public Post(int userID, String title, String desc, String color, Date dateCreated, boolean isHidden, Date date) {
        this.UserId=userID;
        this.Title=title;
        this.Description=desc;
        this.Color=color;
        this.DateCreated=dateCreated;
        this.IsHidden=isHidden;
        this.Date=date;
    }

    */
    public int getUserId() {
        return UserId;
    }

    public void setUserId(int userId) {
        UserId = userId;
    }

    public String getTitle() {
        return Title;
    }

    public void setTitle(String title) {
        Title = title;
    }

    public String getDescription() {
        return Description;
    }

    public void setDescription(String description) {
        Description = description;
    }

    public String getColor() {
        return Color;
    }

    public void setColor(String color) {
        Color = color;
    }

    public java.util.Date getDateCreated() {
        return DateCreated;
    }

    public void setDateCreated(java.util.Date dateCreated) {
        DateCreated = dateCreated;
    }

    public boolean isHidden() {
        return IsHidden;
    }

    public void setHidden(boolean hidden) {
        IsHidden = hidden;
    }

    public java.util.Date getDate() {
        return Date;
    }

    public void setDate(java.util.Date date) {
        Date = date;
    }
}
