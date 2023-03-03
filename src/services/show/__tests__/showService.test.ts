import {api} from '../../api';
import {episode1, episode2, episode22, episode23, episodeList} from '../mocks';
// import {showMocks} from 'test/mocks/showMocks';
import {showService} from '../showService';

describe('showService', () => {
  describe('getEpisodes', () => {
    beforeAll(() => {
      jest.spyOn(api, 'get').mockResolvedValue({data: episodeList});
    });
    test('when API return episode list return all season nomes', async () => {
      const groupEpisode = await showService.getEpisodes('250');

      expect(groupEpisode.seasonNames.includes('1')).toBeTruthy();
      expect(groupEpisode.seasonNames.includes('2')).toBeTruthy();
      // expect(groupEpisode.seasonNames).toEqual(['1', '2']);
      // expect(groupEpisode.seasonNames.length).toBe(2);

      // expect(spyFn).toBeCalledTimes(1);
    });
    test('when API return episode list return the episode grouped by season', async () => {
      const groupEpisode = await showService.getEpisodes('250');

      const season1 = groupEpisode.seasons[1];
      const season2 = groupEpisode.seasons[2];

      expect(season1.includes(episode1)).toBeTruthy();
      expect(season1.includes(episode2)).toBeTruthy();

      expect(season2.includes(episode22)).toBeTruthy();
      expect(season2.includes(episode23)).toBeTruthy();
    });
    // test('when API return episode list return all season names', async () => {
    //   const groupedEpisodes = await showService.getEpisodes('250');

    //   expect(groupedEpisodes.seasonNames.includes('1')).toBeTruthy();
    //   expect(groupedEpisodes.seasonNames.includes('2')).toBeTruthy();

    //   expect(groupedEpisodes.seasonNames.length).toBe(2);
    // });
    // test('when API return episode list return the episodes grouped by season', async () => {
    //   const groupedEpisodes = await showService.getEpisodes('250');

    //   const temp1 = groupedEpisodes.seasons[1];
    //   const temp2 = groupedEpisodes.seasons[2];

    //   expect(temp1[0]).toEqual(showMocks.episode1);
    //   expect(temp1[1]).toEqual(showMocks.episode2);

    //   expect(temp2[0]).toEqual(showMocks.episode22);
    //   expect(temp2[1]).toEqual(showMocks.episode23);
    // });
  });
});
