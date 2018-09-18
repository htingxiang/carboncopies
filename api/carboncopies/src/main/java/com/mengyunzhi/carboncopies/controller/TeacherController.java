package com.mengyunzhi.carboncopies.controller;

import com.mengyunzhi.carboncopies.entity.Teacher;
import com.mengyunzhi.carboncopies.service.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/teacher")
public class TeacherController {
    @Autowired
    TeacherService teacherService;
    @GetMapping("/getAllTeacher")
    public Iterable<Teacher> getAllTeacher() {
        return teacherService.getAllTeacher();
    }
    @PostMapping("/addTeacher")
    @ResponseStatus(HttpStatus.CREATED)
    public Teacher addTeahcer(@RequestBody Teacher teacher) {
        return teacherService.addTeacher(teacher);
    }
    @DeleteMapping("/delete{id}")
    public void deleteById(@PathVariable Long id){
        teacherService.deleteById(id);
        return;
    }
    @GetMapping("/getTeacher{id}")
    public Teacher getTeacher(@PathVariable Long id) {
        return teacherService.findTeacherById(id);
    }
    @PutMapping("/updateTeacher{id}")
    public Teacher updateTeacher(@PathVariable Long id, @RequestBody Teacher teacher) {
        return teacherService.updateTeacher(id, teacher);
    }
}
