package com.taskiran.backend.mappers;

import com.taskiran.backend.dtos.SignUpDto;
import com.taskiran.backend.dtos.UserDto;
import com.taskiran.backend.entites.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface UserMapper {

    UserDto toUserDto(User user);

    @Mapping(target = "password", ignore = true)
    User signUpToUser(SignUpDto signUpDto);

}
