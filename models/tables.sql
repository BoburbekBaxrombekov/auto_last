--? GET CURRENT TIME
SELECT (NOW()::time + interval '5 hours')

CREATE TABLE clients(
    id serial PRIMARY KEY,
    ismizuz text NOT NULL,
    ismizru text NOT NULL,
    data text,
    photo text,
    date text DEFAULT NOW()::time + interval '5 hours'
)

CREATE TABLE car(
    id serial PRIMARY KEY,
    madel text,
    marka text,
    color text,
    yili bigint,
    divigitel bigint,
    yoqilgi text,
    transmission text,
    kuzuv text,
    perevod text,
    yurgani text,
    narxi text,
    aksiya text,
    opisaniya text,
    ismiz text,
    gmail text,
    photo text,
    date text DEFAULT NOW()::time + interval '5 hours'
)

INSERT INTO users(name, gmail, password) VALUES ('tester', 'abc@gmail.com', 'parol123')