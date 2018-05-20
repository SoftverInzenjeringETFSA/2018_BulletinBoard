package bulletinboard.project.bulletinboard.service;

import bulletinboard.project.bulletinboard.Domain.Models.User;
import java.util.List;

public interface UserService {
    void save(User user);

    User findByUsername(String username);
    List<User> getAllUsers();
    void deleteUser(User user);
}
