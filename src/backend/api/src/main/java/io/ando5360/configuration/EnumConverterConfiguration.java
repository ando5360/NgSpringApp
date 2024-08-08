package org.openapitools.configuration;

import org.openapitools.model.Group;
import org.openapitools.model.Role;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.convert.converter.Converter;

@Configuration
public class EnumConverterConfiguration {

    @Bean(name = "org.openapitools.configuration.EnumConverterConfiguration.groupConverter")
    Converter<String, Group> groupConverter() {
        return new Converter<String, Group>() {
            @Override
            public Group convert(String source) {
                return Group.fromValue(source);
            }
        };
    }
    @Bean(name = "org.openapitools.configuration.EnumConverterConfiguration.roleConverter")
    Converter<String, Role> roleConverter() {
        return new Converter<String, Role>() {
            @Override
            public Role convert(String source) {
                return Role.fromValue(source);
            }
        };
    }

}
