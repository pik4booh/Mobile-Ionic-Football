{"name":"Bayern","teamId":37,"teamName":"Bayern Munich","teamRegionName":"Allemagne","seasonId":0,"seasonName":null,
"tournamentId":3,"isOpta":true,"tournamentRegionId":81,"tournamentRegionCode":"de","tournamentRegionName":"Allemagne",
"regionCode":"de","tournamentName":"Bundesliga","rating":7.16,"ranking":1,"apps":12,"goal":43.0,"yellowCard":17.0,
"redCard":1.0,"shotsPerGame":19.916666666666668,"aerialWonPerGame":12.75,"possession":0.62859166666666655,
"passSuccess":0.88811188811188813},

{"name":"PSG","teamId":304,"teamName":"Paris Saint-Germain","teamRegionName":"France","seasonId":0,"seasonName":null,
"tournamentId":22,"isOpta":true,"tournamentRegionId":74,"tournamentRegionCode":"fr","tournamentRegionName":"France",
"regionCode":"fr","tournamentName":"Ligue 1","rating":7.04,"ranking":2,"apps":13,"goal":34.0,"yellowCard":17.0,"redCard":0.0,
"shotsPerGame":16.615384615384617,"aerialWonPerGame":7.0,"possession":0.680476923076923,"passSuccess":0.90566240464166758},

{"name":"Leverkusen","teamId":36,"teamName":"Bayer Leverkusen","teamRegionName":"Allemagne","seasonId":0,"seasonName":null,
"tournamentId":3,"isOpta":true,"tournamentRegionId":81,"tournamentRegionCode":"de","tournamentRegionName":"Allemagne",
"regionCode":"de","tournamentName":"Bundesliga","rating":6.98,"ranking":3,"apps":12,"goal":37.0,"yellowCard":23.0,"redCard":0.0,
"shotsPerGame":16.25,"aerialWonPerGame":9.5833333333333339,"possession":0.60575833333333329,"passSuccess":0.88899839842306272},

{"name":"Man City","teamId":167,"teamName":"Manchester City","teamRegionName":"Angleterre","seasonId":0,"seasonName":null,
"tournamentId":2,"isOpta":true,"tournamentRegionId":252,"tournamentRegionCode":"gb-eng","tournamentRegionName":"Angleterre",
"regionCode":"gb-eng","tournamentName":"Premier League","rating":6.96,"ranking":4,"apps":13,"goal":33.0,"yellowCard":23.0,
"redCard":2.0,"shotsPerGame":16.46153846153846,"aerialWonPerGame":7.9230769230769234,"possession":0.62333846153846151,
"passSuccess":0.90200071882113331},

{"name":"Real Madrid","teamId":52,"teamName":"Real Madrid","teamRegionName":"Espagne","seasonId":0,"seasonName":null,
"tournamentId":4,"isOpta":true,"tournamentRegionId":206,"tournamentRegionCode":"es","tournamentRegionName":"Espagne",
"regionCode":"es","tournamentName":"LaLiga","rating":6.93,"ranking":5,"apps":14,"goal":31.0,"yellowCard":26.0,"redCard":1.0,
"shotsPerGame":17.5,"aerialWonPerGame":8.3571428571428577,"possession":0.57288571428571422,"passSuccess":0.89664429530201339}

Équipe	Compétition	Buts	Tirs pm	Discipline	Possession%	PassesRéussies%	AériensGagnés	Note
1. Bayern Munich	Bundesliga	43	19.9	171	62.9	88.8	12.8	7.16
2. Paris Saint-Germain	Ligue 1	34	16.6	170	68.0	90.6	7	7.04
3. Bayer Leverkusen	Bundesliga	37	16.3	230	60.6	88.9	9.6	6.98
4. Manchester City	Premier League	33	16.5	232	62.3	90.2	7.9	6.96
5. Real Madrid	LaLiga	31	17.5	261	57.3	89.7	8.4	6.93

insert into Competitions(idCompetition,nomCompetition) values (1,'Bundesliga');
insert into Competitions(idCompetition,nomCompetition) values (2,'Ligue 1');
insert into Competitions(idCompetition,nomCompetition) values (3,'Premier League');
insert into Competitions(idCompetition,nomCompetition) values (4,'LaLiga');

insert into Equipes(idEquipe,nomEquipe,idCompetition) values(1,'Bayern Munich',1);
insert into Equipes(idEquipe,nomEquipe,idCompetition) values(2,'Paris Saint-Germain',2);
insert into Equipes(idEquipe,nomEquipe,idCompetition) values(3,'Bayer Leverkusen',1);
insert into Equipes(idEquipe,nomEquipe,idCompetition) values(4,'Manchester City',3);
insert into Equipes(idEquipe,nomEquipe,idCompetition) values(5,'Real Madrid',4);

insert into General(idGeneral,idEquipe,sousType,buts,tirePM,jaune,rouge,possesion,passesReussies,aeriensGagnes,note) values (1,1,1,43.0,19.9,17,1,88.8,12.8,7.16)
insert into General(idGeneral, idEquipe, sousType, buts, tirePM, jaune, rouge, possesion, passesReussies, aeriensGagnes, note) values (2, 2, 1, 34.0, 16.6, 17, 0, 68.0, 90.6, 7.0, 7.04);
insert into General(idGeneral, idEquipe, sousType, buts, tirePM, jaune, rouge, possesion, passesReussies, aeriensGagnes, note) values (3, 3, 1, 37.0, 16.3, 23, 0, 60.6, 88.9, 9.6, 6.98);
insert into General(idGeneral, idEquipe, sousType, buts, tirePM, jaune, rouge, possesion, passesReussies, aeriensGagnes, note) values (4, 4, 1, 33.0, 16.5, 23, 2, 62.3, 90.2, 7.9, 6.96);
insert into General(idGeneral, idEquipe, sousType, buts, tirePM, jaune, rouge, possesion, passesReussies, aeriensGagnes, note) values (5, 5, 1, 31.0, 17.5, 26, 1, 57.3, 89.7, 8.4, 6.93);