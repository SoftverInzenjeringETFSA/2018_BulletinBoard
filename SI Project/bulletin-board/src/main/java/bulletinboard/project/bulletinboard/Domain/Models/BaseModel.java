package bulletinboard.project.bulletinboard.Domain.Models;

import org.springframework.data.annotation.Id;
import java.util.UUID;

public class BaseModel {
    @Id
    private UUID id;

    public UUID getId()
    {
        return this.id;
    }

    public void setId(UUID id)
    {
        this.id = id;
    }

}
