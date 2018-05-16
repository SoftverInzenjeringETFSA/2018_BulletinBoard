package bulletinboard.project.bulletinboard.Repositories;

import java.util.List;
import java.util.UUID;

import bulletinboard.project.bulletinboard.Domain.Models.Image;
import bulletinboard.project.bulletinboard.Domain.Models.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ImageRepository extends MongoRepository<Image, String> {

    public Image insert(Image image);

}
