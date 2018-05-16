package bulletinboard.project.bulletinboard.Repositories;

import bulletinboard.project.bulletinboard.Domain.Models.SocialMediaPost;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface SocialMediaPostRepository extends MongoRepository<SocialMediaPost, String> {
}
