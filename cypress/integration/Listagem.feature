Feature: Listagem
    Como um usuário, desejo acessar a listagem
    Para que possa vizualizar meus dados de cadastro

Scenario: Listagem sem registro
    Given que o site não possui registros
    When acessar a listagem
    Then deve visualizar a listagem vazia

Scenario: Listagem com apenas um registro
    Given que o site possui registros
    When acessar a listagem
    Then deve visualizar a listagem
