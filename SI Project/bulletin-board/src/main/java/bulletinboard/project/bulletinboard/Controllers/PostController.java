package bulletinboard.project.bulletinboard.Controllers;


import bulletinboard.project.bulletinboard.Domain.Models.Post;
import bulletinboard.project.bulletinboard.service.PostService;
import jdk.nashorn.api.scripting.JSObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PostController {

    @Autowired
    private PostService postService;

    @RequestMapping("/getAllPostsWithDate")
    public List<Post> getAllPostsWithDate() {
        return postService.getAllPostsWithDate();
    }

    @RequestMapping("/getPostWithDate")
    public Post getPostWithDate(String id) {
        return postService.findById(id);
    }

    @PostMapping("/addPostWithDate")
    public int addPost(Post post) {
        return postService.createPost(post);
    }

    @PostMapping("/hidePost")
    public boolean hidePost(String id) {
        return postService.hidePost(id);
    }
}
