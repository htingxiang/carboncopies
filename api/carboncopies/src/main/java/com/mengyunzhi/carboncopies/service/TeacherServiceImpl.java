package com.mengyunzhi.carboncopies.service;

import com.mengyunzhi.carboncopies.entity.Teacher;
import com.mengyunzhi.carboncopies.repository.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TeacherServiceImpl implements TeacherService {
    @Autowired
    TeacherRepository teacherRepository;
    @Override
    public Iterable<Teacher> getAllTeacher() {
        return teacherRepository.findAll();
    }

    @Override
    public Teacher addTeacher(Teacher teacher) {
        return teacherRepository.save(teacher);
    }

    @Override
    public void deleteById(Long id) {
        teacherRepository.deleteById(id);
        return;
    }

    @Override
    public Teacher findTeacherById(Long id) {
        return teacherRepository.findById(id).get();
    }

    @Override
    public Teacher updateTeacher(Long id, Teacher teacher) {
        Teacher updateTeacher = teacherRepository.findById(id).get();
        updateTeacher.setName(teacher.getName());
        updateTeacher.setEmail(teacher.getEmail());
        updateTeacher.setUsername(teacher.getUsername());
        updateTeacher.setSex(teacher.isSex());
        return teacherRepository.save(updateTeacher);
    }
}
