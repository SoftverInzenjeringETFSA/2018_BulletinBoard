package bulletinboard.project.bulletinboard.Domain.Models;

import java.util.UUID;
import javax.persistence.*;
import java.util.Set;
import java.time.LocalDateTime;
import org.springframework.data.annotation.Id;

public class User extends BaseModel{


    private String firstName;
    private String lastName;
    private String username;
    private String password;
    private String email;
    private String image;
    private String role;
    LocalDateTime created;


    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public LocalDateTime getCreated(){
        return created;
    }

    public void setCreated(LocalDateTime created){
        this.created = created;
    }
}
