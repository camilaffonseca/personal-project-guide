from camila.skills import (
    python,
    javascript,
    react,
    html,
    css
)


class JuniorProgrammer():

    def __init__(self):
        self.name = 'Camila Furtado da Fonseca'
        self.age = 17
        self.email = 'camilafonseca.ang7@gmail.com'

        self.city = 'Canguçu'
        self.uf = 'RS'
        self.country = 'BR'

    def get_skills(self):
        skills_set = {
            'programming_languages': [
                python,
                javascript,
            ],
            'libraries': [
                react
            ],
            'markup_languages': [
                html
            ],
            'stylization_languages': [
                css
            ]
        }

        return skills_set

    def get_courses(self):
        return [
            'MooDev - Escola de Ciência da Computação e Robótica',
            'Udemy - React, Python',
            'Curso em Vídeo - Python',
        ]


Camila = JuniorProgrammer()
