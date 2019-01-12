export default class LoadDataService {
    async getAllData(urls) {
        try {
            return await Promise.all(
                urls.map(
                    url =>
                        fetch(url).then(
                            (response) => response.json()
                        )))
        } catch (error) {
            console.log(error);
            throw (error)
        }
    }

    getStates = (states) => {
        const statesArr = new Set();
        states.map(items => {
            return items.expanded.map(item => {    
                return statesArr.add(item);
            });
        });
        return [...statesArr];
    }

    getNodes = (sections, questArr) => {
        let sectionsObj = this.QASections(sections, questArr);
        
        Object.keys(sectionsObj).map(k => {
            let parentItem = sectionsObj[sectionsObj[k].parentId]
            
            if (parentItem) {
                if (!parentItem.children) {
                    parentItem.children = [];
                }

                parentItem.children.push(sectionsObj[k]);
            }
            return null;
        });

        return sectionsObj['-1'];
    }

    getSections(array) {
        let obj  = {};
        array.forEach(function(data){
            obj[data.id] = data
        });
        return obj;
    }

    QASections(sections, questArr) {
        let sectionsObj = this.getSections(sections);
        questArr.map( item => {
            if (!sectionsObj[item.sectionId].qas) {
                sectionsObj[item.sectionId].qas = [];
            }
            sectionsObj[item.sectionId].qas.push(item);
            return null;
        });

        return sectionsObj;
    }
}