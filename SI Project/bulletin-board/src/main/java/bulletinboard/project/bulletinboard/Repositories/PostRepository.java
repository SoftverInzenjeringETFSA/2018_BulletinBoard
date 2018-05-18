package bulletinboard.project.bulletinboard.Repositories;

import bulletinboard.project.bulletinboard.Domain.Models.BasePost;
import bulletinboard.project.bulletinboard.Domain.Models.Post;
import bulletinboard.project.bulletinboard.Domain.Models.SocialMediaPost;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;
import java.util.UUID;

public interface PostRepository extends MongoRepository<BasePost, String> {
    @Query("{'Date':{$ne:null}}")
    List<Post> getAllPostsWithDate();

    @Query("{ '_id' : ?0 }")
    List<BasePost> returnPostById(UUID id);

    @Query("{'_class':'socialMediaPost'}")
    List<SocialMediaPost> getAllSocialMediaPosts();
}
