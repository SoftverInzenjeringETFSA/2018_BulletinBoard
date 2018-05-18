package bulletinboard.project.bulletinboard.Repositories;

import java.util.List;
import java.util.UUID;
import bulletinboard.project.bulletinboard.Domain.Models.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, String> {

    public List<User> findAllBy();
    public List<User> findDistinctFirstBy(UUID id);
    public User findByFirstName(String firstName);
    public User findByRole(String role);
    public User findByUsername(String username);
    public List<User> findByLastName(String lastName);
    public User insert(User user);
    public User findTopByOrderByCreatedDesc();
    public List<User> findAll();


}
