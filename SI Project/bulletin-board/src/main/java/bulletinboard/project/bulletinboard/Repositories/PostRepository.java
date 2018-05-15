package bulletinboard.project.bulletinboard.Repositories;

import bulletinboard.project.bulletinboard.Domain.Models.Post;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface PostRepository extends MongoRepository<Post, String> {
    @Query("{'Date':{$ne:null}}")
    List<Post> getAllPostsWithDate();

    List<Post> getAllPosts();
}
