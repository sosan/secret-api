const Secret = require('../../../domain/secret/Secret');

const mongoSecretParser = ({ muid }) => {
  return{
    toDomain: ({
      createdAt,
      _id,
      secret,
      token,
      iv,
      expireAt,
      updatedAt,
    }) => {
      const id = (muid.from(_id)).toString();
      return new Secret({
        createdAt,
        id,
        secret,
        token,
        iv,
        expireAt,
        updatedAt,
      })
    },
    toDocument:({
      createdAt,
      id,
      secret,
      token,
      iv,
      expireAt,
      updatedAt,
    }) => {
      const _id = muid.from(id)
      return{
        createdAt,
        _id,
        secret,
        token,
        iv,
        expireAt,
        updatedAt,
      }
    }
  }
}

module.exports = mongoSecretParser;
