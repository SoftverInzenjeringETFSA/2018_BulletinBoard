package bulletinboard.project.bulletinboard.Repositories;

import bulletinboard.project.bulletinboard.Domain.Models.Post;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;
import java.util.UUID;

public interface PostRepository extends MongoRepository<Post, String> {
    @Query("{'Date':{$ne:null}}")
    List<Post> getAllPostsWithDate();

    @Query("{ '_id' : ?0 }")
    List<Post> returnPostById(UUID id);
}
