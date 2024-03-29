-- 5. Escreva uma query que exiba quatro informações: o maior salário, o menor salário, a soma de todos os salários e a média dos salários. Todos os valores devem ser formatados para ter apenas duas casas decimais.
SELECT 
    ROUND(MAX(SALARY), 2) AS 'Maior Salario',
    ROUND(MIN(SALARY), 2) AS 'Menor Salario',
    ROUND(SUM(SALARY), 2) AS 'Soma Salario',
    ROUND(AVG(SALARY), 2) AS 'Média Salario'
FROM
    hr.employees;