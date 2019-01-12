import LoadDataService from './LoadDataService';

describe('LoadDataService', () => {
    it('Should Load JSON Data', async () => {
        const loadDataService = new LoadDataService();
        loadDataService.getAllData(
            ['/data/4,5,6,7,8,11,12,15,16,17.json', '/data/44,45,46.json', '/data/sections.json', '/data/states.json']
          ).then( (data) => {
             let [ qa, qa2, sections, states ] = data;
            
              expect(qa.length).toBe(24);
              expect(qa2.length).toBe(32);
              expect(sections.length).toBe(16);
              expect(states.length).toBe(3);
          })
        }
    );
});