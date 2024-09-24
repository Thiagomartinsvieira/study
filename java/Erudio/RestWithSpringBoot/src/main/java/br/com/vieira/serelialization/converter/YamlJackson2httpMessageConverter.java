package br.com.vieira.serelialization.converter;

import com.fasterxml.jackson.annotation.JsonInclude;
import org.springframework.http.MediaType;
import org.springframework.http.converter.json.AbstractJackson2HttpMessageConverter;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.dataformat.yaml.YAMLMapper;

public class YamlJackson2httpMessageConverter extends AbstractJackson2HttpMessageConverter {

    public YamlJackson2httpMessageConverter() {
        super(new YAMLMapper()
                .setSerializationInclusion(JsonInclude.Include.NON_NULL),
                        MediaType.parseMediaType("application/x-yaml")
                );
    }
}
