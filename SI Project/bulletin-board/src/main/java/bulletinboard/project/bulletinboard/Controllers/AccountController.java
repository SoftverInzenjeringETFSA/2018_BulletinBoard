package bulletinboard.project.bulletinboard.Controllers;


import bulletinboard.project.bulletinboard.Domain.Models.User;
import bulletinboard.project.bulletinboard.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Account")
public class AccountController {

    @Autowired
    private UserRepository repository;

    @RequestMapping(value = "/Login", method = RequestMethod.POST)
    @ResponseStatus(value = HttpStatus.OK)
    public void login(String email) {
    }

    @RequestMapping(value = "/users", method = RequestMethod.GET)
    @ResponseStatus(value = HttpStatus.OK)
    public List<User> getAll() {
        return repository.findAll();
    }

    @RequestMapping(value = "/user", method = RequestMethod.POST)
    @ResponseStatus(value = HttpStatus.OK)
    public User createUser(@RequestBody User user) {
        return repository.insert(user);
    }
}
