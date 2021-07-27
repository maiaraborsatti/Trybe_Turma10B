-- 3. Escreva uma query que exiba a média salarial de cada JOB_ID , ordenando pela média salarial em ordem decrescente.

select *, (MIN_SALARY + MAX_SALARY) / 2 as AVERAGE from hr.jobs order by (MIN_SALARY + MAX_SALARY) / 2;
