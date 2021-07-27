-- 10. Escreva um query que exiba média salarial e o número de funcionários de todos os departamentos com mais de dez funcionários. Dica: agrupe pelo department_id .

SELECT 
	DEPARTMENT_ID, count(*), avg(SALARY)
FROM
    hr.employees
GROUP BY DEPARTMENT_ID
having count(*) > 10;
