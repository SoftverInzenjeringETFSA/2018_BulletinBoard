package bulletinboard.project.bulletinboard.service;

import bulletinboard.project.bulletinboard.Domain.Models.Post;
import bulletinboard.project.bulletinboard.Repositories.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PostServiceImpl implements PostService {

    @Autowired
    private PostRepository postRepository;

    @Override
    public List<Post> getAllPostsWithDate() {
        return postRepository.getAllPostsWithDate();
    }

    @Override
    public int createPost(Post post) {
        return postRepository.save(post).getId();
    }

    @Override
    public Post findById(String id) {
        List<Post> post = postRepository.findAll();
        if(!post.isEmpty())
            return post.get(0);
        return null;
    }
}
