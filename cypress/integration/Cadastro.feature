Feature: Cadastro


Scenario: Cadastro de novo usuário
    Given que acesso o site
    When informar meus dados
    And salvar
    Then devo ser cadastrado com sucesso


    # Given -> Dado / Contexto
    # When -> Quando / ação executada
    # Then -> Entao - > resultado esperado
    # And - > E / Continuidade do passo anterior