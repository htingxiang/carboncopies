package com.mengyunzhi.carboncopies.service;
import com.mengyunzhi.carboncopies.entity.Teacher;
import com.mengyunzhi.carboncopies.repository.TeacherRepository;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;

import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.*;


public class TeacherServiceImplTest extends ServiceTest{
    @Autowired
    TeacherRepository teacherRepository;
    @Autowired TeacherService teacherService;
    @Test
    public void getAllTeacherTest() {
        Teacher teacher1 = new Teacher();
        Teacher teacher2 = new Teacher();
        teacher1.setName("1");
        teacher2.setName("2");
        teacherRepository.save(teacher1);
        teacherRepository.save(teacher2);
        List<Teacher> teachers = (List<Teacher>) teacherService.getAllTeacher();
        assertThat(teachers.size()).isEqualTo(2);
        int i = 1;
        for (Teacher teacher: teachers) {
            assertThat(teacher.getName()).isEqualTo(Integer.toString(i));
            i++;
        }
    }

    @Test
    public void addTeacher() {
        String name = "zhansan";
        Teacher teacher1 = new Teacher();
        teacher1.setName(name);
        teacherService.addTeacher(teacher1);
        Teacher teacher = teacherRepository.findById(teacher1.getId()).get();
        assertThat(teacher.getName()).isEqualTo(name);
    }

    @Test
    public void deleteById() {
        Teacher teacher1 = new Teacher();
        teacher1.setName("1");
        teacherRepository.save(teacher1);
        teacherService.deleteById(teacher1.getId());
        Optional<Teacher> teacher = teacherRepository.findById(teacher1.getId());
        assertThat(teacher).isEmpty();
    }

    @Test
    public void findTeacherById() {
        Teacher teacher1 = new Teacher();
        teacher1.setName("1");
        teacherRepository.save(teacher1);
        Teacher findTeacher = teacherService.findTeacherById(teacher1.getId());
        assertThat(findTeacher.getId()).isEqualTo(teacher1.getId());
    }

    @Test
    public void updateTeacher() {
        Teacher teacher1 = new Teacher();
        teacher1.setName("teacher1");
        teacherRepository.save(teacher1);
        Long id = teacher1.getId();
        Teacher teacher2 = new Teacher();
        teacher2.setName("teacher2");
        teacherService.updateTeacher(id, teacher2);
        Teacher updateTeacher = teacherRepository.findById(id).get();
        assertThat(updateTeacher.getName()).isEqualTo("teacher2");
    }
    @Test
    public void getKlassPage() {
        int page = 1;
        int size = 2;
        Teacher teacher = new Teacher();
        teacher.setName("zhangsan");
        teacherRepository.save(teacher);
        Teacher teacher2 = new Teacher();
        teacher2.setName("lisi");
        teacherRepository.save(teacher2);
        Page<Teacher> teacheres = teacherService.getTeacherPage(page, size);
        assertThat(teacheres.getNumber()).isEqualTo(1);
        assertThat(teacheres.getSize()).isEqualTo(2);
    }
}