class DataBase {
    constructor() {
        this.last_id = 0;
        this.data = [];
    }

    add(data) {
        const id = ++this.last_id;
        this.data.push({
            ...data,
            id,
        });

        return id;
    }

    remove(id) {
        this.data = this.data.filter((item) => item.id !== id);
        return '1';
    }

    get(id) {
        const item = this.data.find((item) => item.id === id);

        if (!item) {
            return 'no found';
        }

        return item;
    }

    getAll() {
        return this.data;
    }

    update(id, data = {}) {
        let item = this.data.find((item) => item.id === id);

        if (!item) {
            return 'no found';
        }

        item = {
            ...item,
            ...data,
        };

        this.data = this.data.map((x) => {
            if (x.id === id) {
                return item;
            }

            return x;
        });

        return '1';
    }
}

module.exports = DataBase;