package com.mengyunzhi.carboncopies.service;

import com.mengyunzhi.carboncopies.entity.Teacher;

public interface TeacherService {
    Iterable<Teacher> getAllTeacher();
    Teacher addTeacher(Teacher teacher);
    void deleteById(Long id);
    Teacher findTeacherById(Long id);
    Teacher updateTeacher(Long id, Teacher teacher);
}
