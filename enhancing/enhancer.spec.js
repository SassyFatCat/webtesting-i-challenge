const enhancer = require('./enhancer.js');

describe('enhancer.js', () => {

    // Success
    it('Success', function() {
        const item = { enhancement: 10 };
        const result = enhancer.success(item);
        expect(result.enhancement).toBe(11)
    });

    // Fail
    it('Fail', function() {
        const item = { enhancement: 17, durability: 80 };
        const result = enhancer.fail(item);
        
        expect(result.enhancement).toBe(16);
        expect(result.durability).toBe(65)
    });

    // Repair
    it('Repair', function() {
        const item = { durability: 1 };
        const result = enhancer.repair(item);

        expect(result.durability).toBe(100);
    })

});
