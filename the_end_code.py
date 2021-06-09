from camila.skills import (
    python,
    javascript,
    typescript,
    react,
    react_native,
    nextjs,
    html,
    css
)


class Programmer():

    def __init__(self):
        self.name = 'Camila Furtado da Fonseca'
        self.age = 18
        self.email = 'camilafonseca.ang7@gmail.com'

        self.city = 'Pelotas'
        self.uf = 'RS'
        self.country = 'BR'

    def get_skills(self):
        skills_set = {
            'programming_languages': [
                python,
                javascript,
            ],
            'supersets': [
                typescript,
            ],
            'libraries': [
                react,
                react_native
            ],
            'frameworks': [
                nextjs
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


Camila = Programmer()
