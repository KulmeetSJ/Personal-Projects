package org.hsbc.aspect;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import java.time.Duration;
import java.time.Instant;

@Aspect
@Component
public class LoggingInterceptor {
    private static final Logger log = LoggerFactory.getLogger(LoggingInterceptor.class);

    @Pointcut("execution(* org.hsbc.controller.*.*(..))")
    public void pointcut(){}

    @Around("pointcut()")
    public Object m1(ProceedingJoinPoint joinPoint) throws Throwable{
        String classname = joinPoint.getSignature().getDeclaringTypeName();
        String methodname = joinPoint.getSignature().getName();

        Instant instant = Instant.now();

        Object result = joinPoint.proceed();

        long elapsedTime = Duration.between(instant, Instant.now()).toMillis();

        log.info("Classname: "+ classname + "   Methodname: "+ methodname + "   Time taken: "+ elapsedTime + "ms");
        log.info("Result: "+ result);

        return result;
    }
}
