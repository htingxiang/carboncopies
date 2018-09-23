package com.mengyunzhi.carboncopies.service;

import com.mengyunzhi.carboncopies.entity.Teacher;
import org.springframework.data.domain.Page;

public interface TeacherService {
    Iterable<Teacher> getAllTeacher();
    Teacher addTeacher(Teacher teacher);
    void deleteById(Long id);
    Teacher findTeacherById(Long id);
    Teacher updateTeacher(Long id, Teacher teacher);
    Page<Teacher> getTeacherPage(int page, int size);
}
