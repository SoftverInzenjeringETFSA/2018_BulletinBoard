package bulletinboard.project.bulletinboard.Domain.Models;

import org.springframework.data.annotation.Id;
import java.util.UUID;

public class BaseModel {
    @Id
    private int id;

    public int getId()
    {
        return this.id;
    }

    public void setId(int id)
    {
        this.id = id;
    }

}
