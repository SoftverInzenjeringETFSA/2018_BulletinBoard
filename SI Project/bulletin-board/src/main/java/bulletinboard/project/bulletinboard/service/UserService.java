package bulletinboard.project.bulletinboard.service;

import  bulletinboard.project.bulletinboard.Domain.Models.User;

public interface UserService {
    void save(User user);

    User findByUsername(String username);
}
