import { expect } from 'chai'
import { smoddit } from '@eth-optimism/smock'

describe('SmockTest', function() {
  it('Should store value as true', async () => {
    const factory = await smoddit('SmockTest')
    const contract = await factory.deploy()
    await contract.deployed()

    expect(await contract.booleanTwo()).to.be.equal(true)

    await contract.smodify.put({
      booleanTwo: true,
    });

    expect(await contract.booleanTwo()).to.be.equal(true)
  })
})
