-- 3. Escreva uma query que exiba a média salarial de cada JOB_ID , ordenando pela média salarial em ordem decrescente.

SELECT 
    *, (MIN_SALARY + MAX_SALARY) / 2 AS AVERAGE
FROM
    hr.jobs
ORDER BY (MIN_SALARY + MAX_SALARY) / 2;
