package com.mengyunzhi.carboncopies.controller;

import com.mengyunzhi.carboncopies.entity.Teacher;
import com.mengyunzhi.carboncopies.repository.TeacherRepository;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.util.Optional;

import static org.assertj.core.api.Assertions.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

public class TeacherControllerTest extends ControllerTest{
    final  String url = "/teacher/";
    @Autowired
    TeacherRepository teacherRepository;
    @Autowired
    MockMvc mockMvc;
    @Test
    public void getAllTeacher() throws Exception {
        String url = "/teacher/getAllTeacher";
        Teacher teacher1 = new Teacher();
        Teacher teacher2 = new Teacher();
        teacher1.setName("1");
        teacher2.setName("2");
        teacherRepository.save(teacher1);
        teacherRepository.save(teacher2);
        this.mockMvc.perform(get(url)).andDo(print()).andExpect(status().is(200));
    }

    @Test
    public void addTeahcer() throws Exception {
        String url = "/teacher/addTeacher";
        String name = "wangwu";
        this.mockMvc
                .perform(post(url).contentType(MediaType.APPLICATION_JSON_UTF8).content("{\"name\": \"wangwu\"}"))
                .andExpect(status().is(201)).andDo(print())
                .andExpect(MockMvcResultMatchers.jsonPath("$.name").value(name));
    }

    @Test
    public void deleteById() throws Exception {
        Teacher teacher = new Teacher();
        teacherRepository.save(teacher);
        Long id = teacher.getId();
        String deleteUrl = this.url + "delete" + id.toString();
        this.mockMvc.perform(delete(deleteUrl))
                .andExpect(status().isOk());
        Optional<Teacher> deleteTeacher = teacherRepository.findById(id);
        assertThat(deleteTeacher).isEmpty();
    }

    @Test
    public void getTeacher() throws Exception {
        Teacher teacher = new Teacher();
        String name = "wangwu";
        teacher.setName(name);
        teacherRepository.save(teacher);
        Long id = teacher.getId();
        String getTeacherUrl = this.url + "getTeacher" + id.toString();
        this.mockMvc.perform(get(getTeacherUrl))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.name").value(name));
    }

    @Test
    public void updateTeacher() throws Exception {
        Teacher oldTeacher = new Teacher();
        String oldName = "oldTeacher";
        oldTeacher.setName(oldName);
        teacherRepository.save(oldTeacher);
        Long id = oldTeacher.getId();
        String newName = "newTeacher";
        String putUrl = this.url + "updateTeacher" + id.toString();
        this.mockMvc
                .perform(put(putUrl)
                        .contentType(MediaType.APPLICATION_JSON_UTF8)
                        .content("{\"name\":\"" + newName + "\"}"))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.name").value(newName));
    }
    @Test
    public void getByPage() throws Exception {
        String pageUrl = this.url + "getByPage";
        this.mockMvc
                .perform(get(pageUrl).param("size", "1")
                .param("page", "2"))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.pageable.pageNumber").value(2))
                .andExpect(MockMvcResultMatchers.jsonPath("$.pageable.pageSize").value(1))
                .andDo(print());
    }
}